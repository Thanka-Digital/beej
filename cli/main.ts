import minimist from "minimist";
import colors from "picocolors";
import prompts from "prompts";

const {
  cyanBright,
  greenBright,
  red,
  reset,
  yellowBright,
} = colors;

type Configs = {
  library?: "next" | "react";
  component?: "tailwind" | "chakra" | "mantine";
  state?: "context" | "redux" | "jotai";
  api?: "fetch" | "rtk" | "tanstack";
}
type ColorFunc = (str: string | number) => string;
type LibraryVariant = {
  name: string;
  displayName: string;
  color: ColorFunc;
}
type ComponentVariant = {
  name: string;
  displayName: string;
  color: ColorFunc;
}
type StateVariant = {
  name: string;
  displayName: string;
  color: ColorFunc;
}
type ApiVariant = {
  name: string;
  displayName: string;
  color: ColorFunc;
}

const libraries: LibraryVariant[] = [
  {
    name: "react",
    displayName: "Rect",
    color: cyanBright,
  },
  {
    name: "next",
    displayName: "Next.js",
    color: yellowBright,
  }
];
const components: ComponentVariant[] = [
  {
    name: "tailwind",
    displayName: "Tailwind",
    color: cyanBright,
  },
  {
    name: "chakra",
    displayName: "Chakra UI",
    color: greenBright,
  },
  {
    name: "mantine",
    displayName: "Mantine",
    color: yellowBright,
  }
];
const states: StateVariant[] = [
  {
    name: "context",
    displayName: "Context API",
    color: cyanBright,
  },
  {
    name: "redux",
    displayName: "Redux",
    color: greenBright,
  },
  {
    name: "jotai",
    displayName: "Jotai",
    color: yellowBright,
  }
];
const apis: ApiVariant[] = [
  {
    name: "fetch",
    displayName: "Fetch",
    color: cyanBright,
  },
  {
    name: "rtk",
    displayName: "Redux Toolkit",
    color: greenBright,
  },
  {
    name: "tanstack",
    displayName: "Tanstack",
    color: yellowBright,
  },
];

// Agruments parsed with minimist
const args = minimist<Configs>(process.argv.slice(2), {
  default: { help: false },
  alias: { h: 'help', l: 'library', c: 'component', s: 'state', a: 'api' },
  string: ['_'],
});
const cwd = process.cwd();

const LIBRARIES = [
  "next",
  "react",
];
const COMPONENTS = [
  "chakra",
  "mantine",
  "tailwind",
];
const STATES = [
  "context",
  "jotai",
  "redux",
];
const APIS = [
  "fetch",
  "rtk",
  "tanstack",
];

const defaultTargetDir = 'thanka-ui-starter-project';

export const main = async () => {
  const argTargetDir = args._[0];
  const argLibrary = args.library || args.l;
  const argComponent = args.component || args.c;
  const argState = args.state || args.s;
  const argApi = args.api || args.a;

  let targetDir = argTargetDir || defaultTargetDir;

  let result: prompts.Answers<'projectName' | 'library' | 'component' | 'state' | 'api'>;
  try {
    result = await prompts([
      {
        type: argTargetDir ? null : 'text',
        name: 'projectName',
        message: reset('Project Name:'),
        initial: defaultTargetDir,
        onState: (state) => {
          targetDir = formatTargetDir(state.value) || defaultTargetDir;
        }
      },
      {
        type:
          argLibrary && LIBRARIES.includes(argLibrary) ? null : 'select',
        name: 'library',
        message:
          typeof argLibrary === 'string' && !LIBRARIES.includes(argLibrary)
            ? reset(
              `"${argLibrary}" isn't available. Please choose from below: `,
            )
            : reset('Select a library:'),
        initial: 0,
        choices: libraries.map((library) => {
          const libraryColor = library.color
          return {
            title: libraryColor(library.displayName || library.name),
            value: library.name,
          }
        }),
      },
      {
        type:
          argComponent && COMPONENTS.includes(argComponent) ? null : 'select',
        name: 'component',
        message:
          typeof argComponent === 'string' && !COMPONENTS.includes(argComponent)
            ? reset(
              `"${argComponent}" isn't available. Please choose from below: `,
            )
            : reset('Select a component style:'),
        initial: 0,
        choices: components.map((component) => {
          const componentColor = component.color
          return {
            title: componentColor(component.displayName || component.name),
            value: component.name,
          }
        }),
      },
      {
        type:
          argState && STATES.includes(argState) ? null : 'select',
        name: 'state',
        message:
          typeof argState === 'string' && !STATES.includes(argState)
            ? reset(
              `"${argState}" isn't available. Please choose from below: `,
            )
            : reset('Select a state preference:'),
        initial: 0,
        choices: states.map((state) => {
          const stateColor = state.color
          return {
            title: stateColor(state.displayName || state.name),
            value: state.name,
          }
        }),
      },
      {
        type:
          argApi && APIS.includes(argApi) ? null : 'select',
        name: 'api',
        message:
          typeof argApi === 'string' && !APIS.includes(argApi)
            ? reset(
              `"${argApi}" isn't available. Please choose from below: `,
            )
            : reset('Select a API style:'),
        initial: 0,
        choices: apis.map((api) => {
          const apiColor = api.color
          return {
            title: apiColor(api.displayName || api.name),
            value: api.name,
          }
        }),
      },
    ],
      {
        onCancel: () => {
          throw new Error(red('✖') + ' Operation cancelled')
        }
      },
    );
  } catch (error: unknown) {
    console.error(red((error as Error).message));
    return;
  }

  // get the prompts result
  const { projectName, library, component, state, api } = result;

  const templateRootLibrary = library || argLibrary;
  const templateComponentVariant = component || argComponent;
  const templateStateVariant = state || argState;
  const templateApiVariant = api || argApi;

  const templateVariant = `${templateRootLibrary}/${templateComponentVariant}-${templateStateVariant}-${templateApiVariant}`;

  console.log('Project Name: ', projectName);
  console.log('Target Directory: ', targetDir);
  console.log('To use template folder: ', templateVariant);
}

function formatTargetDir(targetDir: string | undefined) {
  return targetDir?.trim().replace(/\/+$/g, '')
}

main();

import { toast } from "sonner";

interface IBaseApiProps {
  url: string;
  needAuth?: boolean;
}

interface IPostApiProps extends IBaseApiProps {
  payload?: dynamicObject;
}

interface IUpdateApiProps extends IBaseApiProps {
  id: string;
  method: "PUT" | "PATCH";
  payload: dynamicObject;
}

interface IDeleteApiProps extends IBaseApiProps {
  id: string;
}

// TODO: Add proper error handling and logging
const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

export async function get(props: IBaseApiProps) {
  try {
    const options = {
      method: 'GET',
      headers: getHeaders(props.needAuth ?? false),
    }
    const res = await fetch(BASE_API_URL + "/" + props.url, options);
    return await res.json();
  } catch (error) {
    console.error(error);
    toast.error("Failed to fetch data. Try again later");
  }
}

export async function post(props: IPostApiProps) {
  try {
    const options = {
      method: 'POST',
      headers: getHeaders(props.needAuth ?? true),
    }
    const res = await fetch(BASE_API_URL + "/" + props.url, {
      ...options,
      body: JSON.stringify(props.payload),
    });
    return await res.json();
  } catch (error) {
    console.error(error);
    toast.error("Failed to add data. Try again later");
  }
}

export async function update(props: IUpdateApiProps) {
  try {
    const options = {
      method: props.method,
      headers: getHeaders(props.needAuth ?? true),
    }
    const res = await fetch(BASE_API_URL + "/" + props.url + "/" + props.id, {
      ...options,
      body: JSON.stringify(props.payload),
    });
    return await res.json();
  } catch (error) {
    console.error(error);
    toast.error("Failed to update data. Try again later");
  }
}

export async function deleteApi(props: IDeleteApiProps) {
  try {
    const options = {
      method: 'DELETE',
      headers: getHeaders(props.needAuth ?? true),
    }
    const res = await fetch(`${BASE_API_URL}/${props.url}/${props.id}`, options);
    return await res.json();
  } catch (error) {
    console.error(error);
    toast.error("Failed to delete data. Try again later");
  }
}

// TODO: Add strategy to handle authorization such as cookie, session, or token
function getHeaders(needAuth: boolean, tokenKeyName: string = 'token') {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  if (needAuth) {
    headers.append('Authorization', 'Bearer ' + localStorage.getItem(tokenKeyName));
  }
  return headers;
}

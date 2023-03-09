import axios from 'axios'
import React, { useEffect, useState } from 'react'

// export interface IJsonResponse {
//   data: ITask[]
// }
// export interface ITask {
//   id: number,
//   title: string,
//   description: string,
//   priority: string
// }

export type Response = {
  status: Number;
  statusText: String;
  data: any;
  error: any;
  loading: Boolean;
};
export const useFetchTask = (url: string): Response => {
  const [status, setStatus] = useState<Number>(0);
  const [statusText, setStatusText] = useState<String>('');
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const getAPIData = async () => {
    setLoading(true);
    try {
      const apiResponse = await fetch(url);
      const json = await apiResponse.json();
      setStatus(apiResponse.status);
      setStatusText(apiResponse.statusText);
      setData(json);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    getAPIData();
  }, []);

  return { status, statusText, data, error, loading };
};


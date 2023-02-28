import axios from 'axios'
import React, { useEffect, useState } from 'react'

export interface IJsonResponse {
    data: ITask[]
}
export interface ITask {
    id: number,
    title: string,
    description: string,
    priority: string
}


export const useFetchTask = <T>() => { }
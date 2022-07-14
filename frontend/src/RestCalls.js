import {URLS} from './Constants';
import axios from "axios";

export const getAllTraders = async () => {
    const url = `${URLS.base}${URLS.trader}${URLS.users}`;
    const result = await axios.get(url);
    return result;
}

export const getAllYields = async () => {
    const url = `${URLS.base}${URLS.yield}${URLS.users}`;
    const result = await axios.get(url);
    return result;
}

export const getAllFarmers = async () => {
    const url = `${URLS.base}${URLS.farmer}${URLS.users}`;
    const result = await axios.get(url);
    return result;
}
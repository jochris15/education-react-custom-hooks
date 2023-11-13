import axios from 'axios';
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)

    async function fetchData() {
        try {
            setLoading(true)
            const { data } = await axios.get(url);
            setData(data);
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: error.response.data.message,
            });
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return {
        data,
        loading,
        fetchData
    }
}
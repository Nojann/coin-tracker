import { useState } from "react";

//Source : https://betterprogramming.pub/clean-api-call-with-react-hooks-3bd6438a375a
export default (apiFunc : (...args : any) => any) => {
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const request = async (...args : any) => {
        setLoading(true);
        try {
            const result = await apiFunc(...args);
            setData(result.data);
        }
        catch(err : any){
            setError(err.message || "Unexpected Error!");
        }
        finally{
            setLoading(false);
        }
    }

    return {
        data,
        error,
        loading,
        request
      };
};
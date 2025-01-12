import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { endPoint } from "../../Components/ForAll/ForAll";
import axios from "axios";

const SingleService = () =>{
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const { title } = useParams();
    const realUrl = title.replace(/-/g, " ");
    console.log(service)

    useEffect(() => {
        const fetchService = async () => {
          try {
            const serviceRes = await axios.get(`${endPoint}/service/${realUrl}`);
            const service = serviceRes.data;
            setService(service)
          } catch (error) {
            console.error("Error fetching data:", error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchService();
      }, [realUrl]);

    return(
        <div>

        </div>
    )
}
export default SingleService;
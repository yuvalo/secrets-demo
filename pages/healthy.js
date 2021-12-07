import Head from 'next/head'
import Link from 'next/link'
import { PrismaClient } from '.prisma/client';
import axios from 'axios';

const prisma = new PrismaClient()



export async function getServerSideProps(context) {

    const healthData = await prisma.healthData.findFirst({
        where: {
            name: "Greg",
        },
    });

    const getRecipies = async () => {
        var options = {
            method: 'GET',
            url: 'https://tasty.p.rapidapi.com/recipes/list',
            params: { from: '0', size: '20', tags: 'under_30_minutes' },
            headers: { 'x-rapidapi-host': 'tasty.p.rapidapi.com', 'x-rapidapi-key': process.env.TASTY_API_KEY }
        };
        const { data } = await axios.request(options);
        console.log(data);
        return data;
    };
    const recipies = await getRecipies();

    return {
        props: { healthData, recipies },
    };
}


export default function Healthy({ healthData, recipies }) {

    const renderedRecipies = recipies.results.map((recipie) => {
        return (
            <div key={recipie.id}>
                <div>{recipie.name}</div>
                <div><img src={recipie.thumbnail_url}></img></div>
            </div>
        );
    });

    return (
        <div>
            <Head><title>test</title></Head>
            {/* <h1>{healthData.name}</h1> */}
            {/* <div>Height: {healthData.height}</div> */}
            {/* <div>Weight: {healthData.weight}</div> */}
            {/* <div>bodyFat: {healthData.bodyFat}</div> */}
            <hr />
            <div>
                {renderedRecipies}
            </div>
        </div>

    )

}
import  ipfsClient from 'ipfs-http-client';

const projectId = '2Enu4kQi1qYtUxKNaxfIoZJMoNM';
const projectSecret = 'a05fd722bf1c9f9fe7b8b96140c2c2c0';

const auth =
    'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

const client = ipfsClient.create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: auth,
    },
});

client.add('Hello afraz').then((res) => {
    console.log(res);
});

// async function ipfsClient() {
//     const { create } = await import('ipfs-http-client')
//     const client= await create(
//         {
//             host: "ipfs.infura.io",
//             port: 5001,
//             protocol: "https",
//             headers: {
//                 "Authorization": `Basic ${Buffer.from(projectIdAndSecret).toString("base64")}`
//         }
//     })
// }
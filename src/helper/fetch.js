import axios from "axios";

let respuesta = undefined;
const baseUrl = process.env.REACT_APP_API_URL;

const axiosPetition = async (endpoint, data = {}, method = 'GET') => {

    const options = {
        method,
        url: `${baseUrl}${endpoint}`,
        //headers: { 'Content-Type': 'application/json' },
        data,
        headers: {
            Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkEzcV95WHBTYW5VLUNlQ1g0YkFndCJ9.eyJpc3MiOiJodHRwczovL3N0LW1hc3RlcnMudXMuYXV0aDAuY29tLyIsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTA3OTcyNjIyMjU4MjQ5NDk3OTY4IiwiYXVkIjpbImFwaS1hdXRlbnRpY2FjaW9uLXN0LW1hc3RlcnMiLCJodHRwczovL3N0LW1hc3RlcnMudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTYzNDMzNTg3NCwiZXhwIjoxNjM0NDIyMjc0LCJhenAiOiJobkk3cVpIZkcyUzdxMDNGMEJUQjF3YklsS1NWR3N5bSIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwifQ.F_DPC0TA11ALKorrJkrD7DXxzoy4vFVP-9MNk00Sf5NqW84rBPzYcMijB8es5c2xkevLKIn8P8er--MxwtpvqAkC2cPbzfNdMTjiv4LynVMF1U2L8vUq1uDmxfuwBr488aNmlXGuX5xPre0CGZKAoDbugLeSEfA6vqazxeUD5YnjzBG3e99Y9oisP3kPuxpHRHmv2GtSN49QBPqfQE3EH1ygHEMVR2yduTA9z2q__CxLBRGQybLPSq7wMr8ubI3g1cpxVDHIVru993T48yiXw9Ah4yFHXSbZwrDw82n7nezfLV_YIfupn8JZjITQiY39CB2sP3PWRFxojOqRTRseKw'
          }
    }

    await axios
        .request(options)
        .then(function (response) {
            const { data } = response;
            respuesta = data;
        })
        .catch(function (error) {
            respuesta = error;
        });
}

export {
    axiosPetition,
    respuesta
}
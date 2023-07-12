require('dotenv').config();

// Access the API key
const apiKey = process.env.API_KEY;

async function getMatchData() {
    return await fetch()
        .then(data => data.json(apiKey))
        .then(data => {
            if (data.status != "success") return;

            const matchesList = data.data;

            if (!matchesList) return [];

            const relevantData = matchesList.map(match => `${match.name}, ${match.status}`);

            console.log({ relevantData });

            document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match}</li>`).join('');

            return relevantData;
        })
        .catch((e) => console.log(e));
}

getMatchData();
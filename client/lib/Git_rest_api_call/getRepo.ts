import axios from "axios";

async function getRepoOwnerDetails(repoUrl:string) {
    try {

        const urlParts = repoUrl.split("github.com/")[1].split("/");
        const owner = urlParts[0];
        const repo = urlParts[1];


        const apiUrl = `https://api.github.com/repos/${owner}/${repo}`;

        const response = await axios.get(apiUrl);
        const ownerDetails = response.data.owner;

        return {
            name: ownerDetails.login, 
            profilePic: ownerDetails.avatar_url, 
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        return null
    }
}

export {getRepoOwnerDetails}
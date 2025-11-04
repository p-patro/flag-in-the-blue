import {updateDoc,doc, getFirestore} from 'firebase/firestore';
import {app } from './firebase-config.js';//address of firebasse configuration 

const DataBase=getFirestore(app);
async function SubmitScore(timeTaken:number,penalty:number){//TimeTaken and penalty is passed while calling the funtion
	const userId = localStorage.getItem('uid');
    if (!userId) {
        console.error("User is not logged in!");
        return;
    }
	const totalScore=timeTaken+penalty;
	try{
		const scoresCollRef=doc(DataBase,"users",userId);
		await updateDoc(scoresCollRef,{totalScore:totalScore});
		console.log("Score submitted successfully!");
	}catch(err){
		console.error("Error submitting TotalScore:",err);
	}
}

export default SubmitScore;
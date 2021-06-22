import React, {createContext} from 'react'
import app from 'firebase/app'

const FirebaseContext = createContext(null);
export {FirebaseContext}

const FirebaseProvider = ({children}) => {

	const config = {
		apiKey: process.env.NEXT_PUBLIC_APIKEY,
		authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
		projectId:process.env.NEXT_PUBLIC_PROJECTID,
		databaseURL:process.env.NEXT_PUBLIC_DATABASEURL,
		storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
		messagingSenderId:process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
		appId:process.env.NEXT_PUBLIC_APPID
	}
	if(!app.apps.length){
		app.initializeApp(config)
	}
	return (
		<FirebaseContext.Provider value={app}>
			{children}
		</FirebaseContext.Provider>
	)
}

export default FirebaseProvider;
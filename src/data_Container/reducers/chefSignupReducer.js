export const initialstatechefsignup={
	fetching:false,
	fetched:false,
	response:"",
	error:null
};

const chefSignup=(state=initialstatechefsignup,action)=>{
	switch(action.type){
		case"CHEF_SIGN_UP_PENDING":{
			return{...state,fetching:true,fetched:false,response:"",error:null}
		}
		case"CHEF_SIGN_UP_REJECTED":{
			return{...state,fetching:false,fetched:false,response:"",error:action.payload}
		}
		case"CHEF_SIGN_UP_FULFILLED":{
			return{...state,fetching:false,fetched:true,response:action.payload.data,error:null}
		}
		default:
		return state;
	}
}

export default chefSignup;
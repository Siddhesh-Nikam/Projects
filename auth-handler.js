const User = require("./../db/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function registerUser(model){

    const hashPassword = await bcrypt.hash(model.password,10);
    let user = new User({
        name:model.name,
        email:model.email,
        password:hashPassword,
    });
    await user.save();
}

// async function loginUser(model){

//     const user = await User.findOne({email:model.email});
//     if(!user){
//         return null;
//     }

//     const isMatched = await bcrypt.compare(model.password,user.password);

//     if(isMatched){
//         const token = jwt.sign(
//             {
//                 id:user._id,
//                 name:user.name,
//                 email:user.email,
//             },
//             "seceret",
//             {
//                 expressIn:"1h",
//             }
//         );
//         return {token,user};
//     } else {
//         return null;
//     }


// }

async function loginUser(model){
    const user = await User.findOne({email: model.email});
    
    if (!user) {
        console.log("User not found");
        return null;
    }

    // Check if both passwords are properly defined
    if (!model.password || !user.password) {
        console.error("Model password or user password is missing");
        return null;
    }

    const isMatched = await bcrypt.compare(model.password, user.password);

    if (isMatched) {
        const token = jwt.sign(
            {
                id: user._id,
                name: user.name,
                email: user.email,
                isAdmin:user.isAdmin,
            },
            "seceret",
            {
                expiresIn: "1h", // Note: Corrected spelling from "expressIn" to "expiresIn"
            }
        );
        return { token, user };
    } else {
        return null;
    }
}


module.exports = 
{   registerUser,
    loginUser
}





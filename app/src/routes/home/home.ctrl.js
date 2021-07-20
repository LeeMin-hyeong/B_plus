"use restrict";

const users={
    id: ["a", ],
    password: ["a", ],
};

const output={
    home: (req, res)=> {
    res.render("home/index");
    },
    login: (req, res)=> {
    res.render("home/login");
    },
};

const process={
    login: (req, res)=> {
        const id=req.body.id,
            password=req.body.password;
        
        if(users.id.includes(id)){
            const idx=users.id.indexOf(id);
            if(users.password[idx]===password){
                return res.json({
                    success: true,
                });
            }
        }
        return res.json({
            success: false,
            msg: "login failed."
        });
    },
};

module.exports={
    output,
    process,
};
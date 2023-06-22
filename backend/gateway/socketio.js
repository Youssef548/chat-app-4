import { Server } from 'socket.io';

const wrap = middleware => (socket, next) => middleware(socket.request, {}, next);
function createWsServer(app, sessionMiddleware) {
    var io = new Server(app, {
        cors: {
            origin: process.env.CLIENT_URL,
            credentials: true
        }
    })


    io.use(wrap(sessionMiddleware));


    io.on("connection", function (socket) {
        try {
            let userId = socket.request.session.passport.user;
            console.log(userId);
            console.log(socket.id);
            io.emit("helow manga", { manga: "ez" })
        }catch(e){
            console.log(e);
        }
    });

}

export default createWsServer
export default function (socket,args){
    console.log(socket.request.session.passport.user);
    console.log(args);
    
}
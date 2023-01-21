const showNotification = document.getElementById('btn-notify');

showNotification.addEventListener('click', () => {
    
    if(!("Notification" in window)) {
        console.log('Navegador não suporta notificações')

    } else if(Notification.permission === "granted") {
        
        const notify = new Notification('Olá, bem vindo(a) de volta a página da sua transformação digital!')

    } else if(Notification.permission !== "denied") {
        
        Notification.requestPermission((permission) => {
            if(permission === "granted"){
                const notify = new Notification('Olá, bem vindo(a) a página da sua transformação digital!')
            } 
        })
    }
});


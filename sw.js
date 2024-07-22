self.addEventListener('notificationclick', event => {
    const action = event.action;
    event.notification.close();

    if (action === 'pause') {
        clients.matchAll().then(clients => {
            clients.forEach(client => {
                client.postMessage({ action: 'pause' });
            });
        });
    } else if (action === 'play') {
        clients.matchAll().then(clients => {
            clients.forEach(client => {
                client.postMessage({ action: 'play' });
            });
        });
    }
});

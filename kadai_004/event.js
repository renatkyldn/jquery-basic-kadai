    $(window).on('load scroll', (e) => {
        if(e.type === 'load'){
            const load = 'loadイベントが発生しました'
            console.log(load);
        }
        if(e.type === 'scroll'){
            const scroll = 'scrollイベントが発生しました'
            console.log(scroll);
        }
    });

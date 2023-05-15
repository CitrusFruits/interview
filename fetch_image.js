function fetchImage(index) {
    return new Promise((resolve) => {

        const timeouts = [
            100,
            50,
            3_000,
            200,
            1_500,
            600,
            200,
            100,
            200,
        ];
        const imagesUrls = [
            'https://i.imgur.com/hVJ8whI.jpg',
            'https://i.imgur.com/dginttx.jpg',
            'https://i.imgur.com/sOqyxz5.jpg',
            'https://i.imgur.com/HQzTz1a.jpg',
            'https://i.imgur.com/o0guGXm.jpg',
            'https://i.imgur.com/jnHtDF4.jpg',
            'https://i.imgur.com/8Qv23Sg.jpg',
            'https://i.imgur.com/gHTUwYj.jpg',
            'https://i.imgur.com/AtWJSoC.jpg',
        ]
        if (index > timeouts.length - 1) {
            setTimeout(() => {
                resolve({
                    error: 'index out of range',
                });
            }, 1_000);
        } else {
            setTimeout(() => {
                resolve({
                    index,
                    error: index === 6 ? 'There was an error' : undefined,
                    imgUrl: index === 6 ? undefined : `${imagesUrls[index]}.png`,
                    totalNumImages: timeouts.length,
                });
            }, timeouts[index] || 200)
        }
    });
}

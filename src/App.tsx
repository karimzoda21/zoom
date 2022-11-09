import React from 'react';
import ReactImageMagnify from "react-image-magnify";

const App = () => {
    return (
        <div>
            <h1>App</h1>
            <ReactImageMagnify
                {...{
                    smallImage: {
                        isFluidWidth: false,
                        src: "https://s3.eu-central-1.amazonaws.com/alifcore.storage/media/images/alifshop/459/samsung-galaxy-a32-6-128-gb-chernyy-1636122422452-lg.webp",
                        width: 400,
                        height: 500,
                        sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px',
                        srcSet: "https://s3.eu-central-1.amazonaws.com/alifcore.storage/media/images/alifshop/459/samsung-galaxy-a32-6-128-gb-chernyy-1636122422452-lg.webp",
                    },
                    largeImage: {
                        src: "https://s3.eu-central-1.amazonaws.com/alifcore.storage/media/images/alifshop/459/samsung-galaxy-a32-6-128-gb-chernyy-1636122422452-lg.webp",
                        width: 1200,
                        height: 1800
                    },
                }}/>
        </div>
    );
};

export default App;
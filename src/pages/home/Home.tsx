import useDocumentMetadata from '@hooks/useDocumentMetadata';

const Home = () => {
    useDocumentMetadata('HomePage', 'This is the main page.');

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-3xl lg:text-8xl text-center mb-6 text-gray-800 dark:text-white">
                    Algo Sound
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-8">
                    A better app.
                </p>
            </div>

            <hr className="flex flex-col my-16 border-t border-gray-300 dark:border-gray-700" />
        
            
            <section id="discover-features" className="flex flex-col justify-center h-96">
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-800 dark:text-white">
                    Discover Our Features
                </h2>
                <p className="home-discovery-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nullam faucibus, risus non condimentum pretium, urna urna 
                    posuere mauris.
                </p>
                <p className="home-discovery-text">
                    Vestibulum fringilla nec leo et cursus. Integer auctor ante 
                    a orci eleifend, et blandit metus rhoncus.
                </p>
                <p className="home-discovery-text">
                    Aliquam a orci at nulla accumsan consectetur. Curabitur 
                    ullamcorper bibendum metus, id posuere nulla rhoncus sed.
                </p>
            </section>
        </>
    );
}

export default Home;

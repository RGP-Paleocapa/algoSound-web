import useDocumentMetadata from '@hooks/useDocumentMetadata';
import data from './data.json';
import ListComponent from './ListComponent';

const CustomPage = () => {
    useDocumentMetadata('Explanation', 'This is the explanation page.');
    const instructions = data.Instructions;
    
    
    return (    
        <>
            <ListComponent items={instructions}  />
        </>
    );
}

export default CustomPage;

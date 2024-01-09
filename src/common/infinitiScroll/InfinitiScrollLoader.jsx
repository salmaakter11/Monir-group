import PropagateLoader from 'react-spinners/PropagateLoader';

const InfinitiScrollLoader = () => {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100px' }}>

                <PropagateLoader color="#36d7b7" />
            </div>
        </>
    );
};

export default InfinitiScrollLoader;
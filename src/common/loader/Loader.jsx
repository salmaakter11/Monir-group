import { Watch } from 'react-loader-spinner'
import './Loader.css'

const Loader = () => {
    return (
        <div className="loder">
            <div className='loder_content'>
                <Watch
                    height="100"
                    width="100"
                    radius="48"
                    color="#ffff"
                    ariaLabel="watch-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
            </div>
        </div>

    );
};

export default Loader;
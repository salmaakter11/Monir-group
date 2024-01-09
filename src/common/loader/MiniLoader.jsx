import { Watch } from "react-loader-spinner";

const MiniLoader = () => {
    return (
        <div>
            <Watch
                height="50"
                width="50"
                radius="48"
                color="#002b47"
                ariaLabel="watch-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    );
};

export default MiniLoader;
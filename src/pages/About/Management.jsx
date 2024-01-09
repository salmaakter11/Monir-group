import makeRequest from "../../../AxiosClient";
import HorizontalLoader from "../../common/loader/HorizontalLoader";
import CommonBanner from "../CommonBanner";
import BannerImg from '../../assets/Image/Banner/management.jpg'
import PageTitle from "../../common/page_title/PageTitle";
import { useQuery } from "@tanstack/react-query";


const Management = () => {

    const { isLoading, error, data:managementPageData } = useQuery({
        queryKey: [`managementPageData`],
        queryFn: async () =>
          {
            const response = await makeRequest({ url:`/api/management`, method: 'get'});
              return response.data;
          }
      })



    return (
        <>
            <PageTitle title="Management" />
            <CommonBanner image={BannerImg} title='Management' />
            {isLoading ? <HorizontalLoader /> : ''}
            
            <main>
                <section className="team__details pb-10">
                    <div className="container">

                        {
                            managementPageData?.map((e, j) => (
                                <div key={j} className="card mt-60">
                                    <div className="card-body shadow">
                                        <div className="row">
                                            <div className="col-xl-10 offset-xl-1">

                                                <div className="row pt-3">
                                                    <div className="col-md-4 col-sm-12"><img className="shadow rounded h-100 img-fluid img-thumbnail" src={e.image_lg} alt='' /></div>
                                                    <div className="col-md-8 col-sm-12 mt-2 align-self-center">
                                                        <h4 className="text-secondary">{e.name} ({e.designation_data})</h4>
                                                        <p>{e.description}</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>


                            ))
                        }



                    </div>
                </section>
            </main>

        </>
    );
};

export default Management;
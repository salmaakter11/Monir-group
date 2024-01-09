import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import makeRequest from "../../../AxiosClient";
import HorizontalLoader from "../../common/loader/HorizontalLoader";
import CommonBanner from "../CommonBanner";
import BannerImg from '../../assets/Image/Banner/documents.jpg'
import PageTitle from "../../common/page_title/PageTitle";
import { useQuery } from "@tanstack/react-query";

const Document = () => {
    const { isLoading, error, data:documentPage } = useQuery({
        queryKey: ['documentPage'],
        queryFn: async () =>
          {
            const response = await makeRequest({ url:  `/api/document`, method: 'get'});
              return response.data;
          }
      })


    return (
        <>
         <PageTitle title="Document" />
            <CommonBanner image={BannerImg} title={"Document"} />
            {isLoading ? <HorizontalLoader /> : ''}
            <main>
                {/*  partners-ofinner-area start */}
                <section className="team__details pt-90 pb-10">

                    {
                        documentPage?.map((d, i) => (
                            <div key={i} className="container">
                                <h1 className="text-secondary">{d.company_name}</h1>
                                <div className="row container">
                                    <div className="col-md-12 col-12">  <h6>BUSINESS PROFILE :{d.business_file !=='' ?<Link to={d.business_file} download={d.business_file} target="_blank" className="btn btn-sm btn-info px-2">Download File</Link> : ''} </h6></div>
                                </div>
                                <br />
                                <div className="row container">
                                    <div className="col-md-4 col-12 ">  <h6>AUTHORIZED FILE :</h6></div>
                                    <div className="col-md-8 col-12">
                                        {
                                            d?.authorize_file.map((e, j) => (
                                                <p key={j}>{j + 1} <strong> {e.title}</strong> <Link to={e.authorized_file} download={e.authorized_file} target="_blank" className="btn btn-sm btn-info px-2">Download File</Link></p>

                                            ))
                                        }
                                    </div>
                                </div>
                                <br />
                            </div>
                        ))
                    }

                </section>
            </main>
        </>
    );
};

export default Document;
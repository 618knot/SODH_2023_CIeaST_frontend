import axios from "../../util/axios";
import Button from "../../components/button/Button";
import Map, { Location } from "../../components/map/Map";
import "./MapPage.scss";
import { Cookies } from "react-cookie";
import { forwardRef, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

let requestJson = {"lat": "", "lng": ""};

const leafletContainer = document.getElementsByClassName("map-wrapper");
console.log(leafletContainer[0])

let isEventListened = false


const MapPage = () => {
    const [address, setAddress] = useState("");
    let location = Location();
    const MapContainerRef = useRef<HTMLDivElement>(null);


    useEffect( () => {
        if(MapContainerRef && MapContainerRef.current) {

            MapContainerRef.current.addEventListener("click", async () => {
                isEventListened = true
                location = Location();
                requestJson["lat"] = location.lat;
                requestJson["lng"] = location.lng;
                let tmp = "";
                
                getAddress(requestJson).then(
                    (data) => {
                        console.log(data)
                        tmp = data.data;
                    }
                ).then(
                    () => { setAddress(tmp); }
                )
                
                
                
            });
        }}, [MapContainerRef.current]
    )

    return (
        <div className="map-page-container" >
            <div ref={MapContainerRef}  className="map-wrapper">
                <Map />
            </div>
            <div className="map-page-footer">
            <h3>{address}</h3>
                <div className="button-container">
                    <Link to="/" className="button primary" state={address}>
                        チャット一覧
                    </Link>
                    {/* <Button
                        label="この駐車場を貸す"
                        className="primary"
                        onClick={ () => { 
                            
                            window.location.href = "/rent";
                         }}
                    /> */}
                    <Link to="/rent" className="button primary" state={address} onClick={ () => {
                        // document.removeEventListener("click", () => {console.log("aa")});
                        console.log("aaa")
                        } }>
                        この駐車場を貸す
                    </Link>
                    <Link to="/" className="button primary" state={address}>
                        この駐車場を借りる
                    </Link>
                </div>
            </div>
        </div>
    );
};

const cookies = new Cookies();

const getAddress = (requestJson: {lat: string, lng: string}) => {
    return axios.post("/reverse_geocoding", requestJson);
}

export default MapPage;
import React from "react";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const handleContact = () => navigate('/contact');

  return (
    <div>
      <div className="Footer">
        <div className="Footer-top">
          <div className="Footer-top-left">
            <h2>Leave a Review</h2>
            <div className="Svg-wrapper">
              <svg style={{cursor:"pointer"}} enableBackground="new 0 0 48 48" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path style={{cursor:"pointer"}} d="m43.611 20.083h-1.611v-.083h-18v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657c-3.572-3.329-8.35-5.382-13.618-5.382-11.045 0-20 8.955-20 20s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" fill="#ffc107"/><path style={{cursor:"pointer"}} d="m6.306 14.691 6.571 4.819c1.778-4.402 6.084-7.51 11.123-7.51 3.059 0 5.842 1.154 7.961 3.039l5.657-5.657c-3.572-3.329-8.35-5.382-13.618-5.382-7.682 0-14.344 4.337-17.694 10.691z" fill="#ff3d00"/><path style={{cursor:"pointer"}} d="m24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238c-2.008 1.521-4.504 2.43-7.219 2.43-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025c3.31 6.477 10.032 10.921 17.805 10.921z" fill="#4caf50"/><path style={{cursor:"pointer"}} d="m43.611 20.083h-1.611v-.083h-18v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571.001-.001.002-.001.003-.002l6.19 5.238c-.438.398 6.591-4.807 6.591-14.807 0-1.341-.138-2.65-.389-3.917z" fill="#1976d2"/></svg>
              <svg style={{cursor:"pointer"}} height="64" viewBox="0 0 64 64" width="64" xmlns="http://www.w3.org/2000/svg"><path style={{cursor:"pointer"}} d="m32.9776218 9.59665517c-.1209375-.49903448-.27375-.98689655-.5475-1.43006896-.133125-.21506897-.2896875-.41151724-.508125-.54931035-.3459375-.21786207-.7115625-.39848276-1.10625-.5185862-.1134375-.03444828-.2278125-.06610345-.3421875-.09868966h-.4678125c-.0103125.00837931-.020625.02234483-.0328125.02513793-.695625.16758621-1.3565625.43572414-2.0259375.67872414-3.1040625 1.12282759-6.2071875 2.24751724-9.3103125 3.37313793-.5325.1927241-.9975.486-1.3809375.8993793-.403125.4347931-.5184375.9356897-.391875 1.5008276.09375.4171034.271875.7997586.5071875 1.1554138.18.2727931.3825.5306896.579375.7923103 3.6346875 4.8348621 7.269375 9.6687931 10.9059375 14.5017931.054375.0716897.1096875.1452414.1771875.2048276.3740625.3277242.79875.5772414 1.29.6917586.8090625.189 1.545.0633104 2.0990625-.5902758.5165625-.6098276.7978125-1.3313793.7940625-2.1190345-.024375-5.7621724-.065625-11.5234138-.0965625-17.2855862-.001875-.4180345-.045-.8267586-.1425-1.23175863zm-19.14 20.23044823c-.2709375-.0046551-.538125.0288621-.778125.1685173-.4134375.242069-.7565625.5567586-1.0096875.9589655-.135.2141379-.225.4431724-.2446875.6982759-.0525.675-.110625 1.3490689-.166875 2.0240689-.0928125 1.1014138-.1875 2.2018966-.279375 3.3033104s-.1790625 2.2028276-.2728125 3.3042414c-.0084375.1005517-.0478125.1992413-.073125.298862v1.0362414c.0271875.1126552.05625.2253104.0825.3379655.0590625.2485862.0984375.5018276.1790625.7429655.118125.3547242.384375.5688621.7528125.6656897.36375.0958965.73125.0828621 1.0940625.0139655.298125-.0567931.58875-.1480345.885-.2141379.6478125-.1433793 1.2984375-.2811724 1.9471875-.4208276 3.70875-.7997586 7.4165625-1.5976552 11.124375-2.4011379.42-.0912414.7875-.3016552 1.1240625-.5576897.193125-.1471034.316875-.351.40875-.5716552.105-.2523103.144375-.5176551.18375-.784862.0965625-.6545173-.103125-1.213138-.5475-1.6982069-.33-.3593793-.7171875-.647069-1.156875-.8649311-3.795-1.8713793-7.588125-3.7455517-11.3878125-5.6076207-.5803125-.2839655-1.2121875-.4198965-1.8646875-.432zm40.18875 14.8416207c-.18-.0782069-.37125-.1331379-.55875-.1936551-.1209375-.0391035-.245625-.0633104-.3675-.1014828-4.201875-1.3155517-8.4028125-2.6320345-12.6046875-3.9494483-.4575-.1433793-.91875-.1526896-1.381875-.0428276-.725625.1722414-1.2403125.6889656-1.32375 1.35-.0825.6563794.035625 1.2866897.3834375 1.8555518 2.1946875 3.5863448 4.3996875 7.1671034 6.594375 10.7543793.313125.513.714375.9422069 1.183125 1.3155517.1528125.1219655.3215625.2271724.493125.3221379.298125.1657242.616875.2206552.961875.162.5503125-.0949655 1.0321875-.3323793 1.4803125-.6414827.106875-.0735517.2053125-.1713104.28125-.2755862 1.723125-2.3974138 3.440625-4.7985518 5.165625-7.1941035.331875-.460862.5371875-.9682758.6778125-1.5073448.0290625-.1117241.0440625-.2281035.0665625-.3416897v-.4562069c-.1471875-.5455862-.55875-.8425862-1.0509375-1.0557931zm-20.77125.1741035c.0075-.5791035-.200625-1.0995517-.6084375-1.5278276-.339375-.3565862-.763125-.5567586-1.2684375-.5157931-.7284375.0595862-1.3621875.3621724-1.8478125.8798276-2.9334375 3.1301379-5.85375 6.2723793-8.77125 9.4155517-.4771875.513931-.7884375 1.1265517-.97125 1.7978276-.06375.2355517-.08625.4776207-.0121875.7168965.095625.3128276.226875.6107587.429375.8733104.2746875.3575172.624375.6247241 1.0621875.7597241 2.7440625.8481724 5.4890625 1.6935518 8.235 2.5352069.361875.1107931.733125.1955173 1.0996875.2914138h1.104375c.046875-.0139655.091875-.0335172.1396875-.0400345.556875-.0772758.90375-.3947586 1.0790625-.9040344.095625-.2765173.1425-.5632759.1425-.8556207 0-.2830345-.0075-.566069-.00375-.8491035.024375-1.6507241.0525-3.3014483.0778125-4.9521724.039375-2.5417241.0834375-5.0834483.1134375-7.6251724zm5.405625-8.91c.260625.0577241.5296875.0754138.815625.1145172.245625-.0391034.51-.055862.7584375-.1256896 4.141875-1.1758966 8.281875-2.3592414 12.4228125-3.5397931.66375-.189 1.239375-.5306897 1.7671875-.9580345.4771875-.3863793.6459375-.8891379.5934375-1.4766207-.0365625-.4012759-.1275-.7904483-.283125-1.1637931-.04125-.1005517-.099375-.1992414-.170625-.2821035-1.6059375-1.8499655-3.215625-3.6971379-4.8225-5.5461724-.466875-.5372069-.9253125-1.081862-1.3875-1.6227931-.25875-.3025862-.571875-.5344138-.9534375-.6712758-.6140625-.2197242-1.18125-.1433793-1.69875.2551034-.2465625.189931-.455625.4143104-.63.6684828-.1021875.1489655-.1940625.3044482-.2925.4562069-2.3615625 3.6254482-4.72125 7.2508965-7.0846875 10.8744827-.2540625.3901035-.3825.8137242-.4003125 1.2708621-.0328125.8863448.48 1.5492414 1.3659375 1.7466207z" fill="#fd5a5a" fillRule="evenodd"/></svg>
            </div>
          </div>
          <div className="Footer-top-middle">
            <h2>Contact</h2>
            <p onClick={handleContact}>Book a Consultation</p>
            <p >Contact Us</p>
          </div>
          {/* <div className="Footer-top-right">
            <h2>Follow Us</h2>
            <div className="Svg-wrapper">
              <svg enableBackground="new 0 0 1024 1024" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle style={{cursor:"pointer"}} cx="512" cy="512" fill="#e4405f" r="512"/><path style={{cursor:"pointer"}} d="m512 256c-69.5 0-78.2.3-105.5 1.5-27.3 1.3-45.8 5.6-62.1 11.9-16.8 6.5-31.1 15.3-45.4 29.5s-23 28.5-29.5 45.4c-6.3 16.3-10.6 34.9-11.9 62.1-1.3 27.3-1.5 36-1.5 105.5s.3 78.2 1.5 105.5c1.3 27.2 5.6 45.8 11.9 62.1 6.5 16.8 15.3 31.1 29.5 45.4 14.2 14.2 28.5 23 45.4 29.5 16.3 6.3 34.9 10.6 62.1 11.9 27.3 1.3 36 1.5 105.5 1.5s78.2-.3 105.5-1.5c27.2-1.3 45.8-5.6 62.1-11.9 16.8-6.5 31.1-15.3 45.4-29.5 14.2-14.2 23-28.5 29.5-45.4 6.3-16.3 10.6-34.9 11.9-62.1 1.3-27.3 1.5-36 1.5-105.5s-.3-78.2-1.5-105.5c-1.3-27.2-5.6-45.8-11.9-62.1-6.5-16.8-15.3-31.1-29.5-45.4-14.2-14.2-28.5-23-45.4-29.5-16.3-6.3-34.9-10.6-62.1-11.9-27.3-1.2-36-1.5-105.5-1.5zm0 46.1c68.3 0 76.5.3 103.5 1.5 25 1.2 38.5 5.3 47.5 8.9 12 4.6 20.5 10.2 29.5 19.1 8.9 9 14.5 17.5 19.1 29.5 3.5 9 7.7 22.5 8.8 47.5 1.2 27 1.5 35.1 1.5 103.5s-.3 76.5-1.6 103.5c-1.3 25-5.5 38.5-9 47.5-4.8 12-10.2 20.5-19.2 29.5-8.9 8.9-17.6 14.5-29.4 19.1-9 3.5-22.7 7.7-47.7 8.8-27.2 1.2-35.2 1.5-103.7 1.5s-76.5-.3-103.7-1.6c-25-1.3-38.7-5.5-47.7-9-12.1-4.8-20.5-10.2-29.4-19.2-9-8.9-14.7-17.6-19.2-29.4-3.5-9-7.7-22.7-9-47.7-1-26.9-1.3-35.2-1.3-103.3 0-68.2.3-76.5 1.3-103.7 1.3-25 5.4-38.7 9-47.7 4.5-12.2 10.2-20.5 19.2-29.5 8.9-8.9 17.3-14.7 29.4-19.2 9-3.5 22.4-7.7 47.4-9 27.2-1 35.2-1.3 103.7-1.3zm0 78.4c-72.6 0-131.5 58.9-131.5 131.5s58.9 131.5 131.5 131.5 131.5-58.9 131.5-131.5-58.9-131.5-131.5-131.5zm0 216.8c-47.1 0-85.3-38.2-85.3-85.3s38.2-85.3 85.3-85.3 85.3 38.2 85.3 85.3-38.2 85.3-85.3 85.3zm167.4-221.9c0 17-13.8 30.7-30.7 30.7-17 0-30.7-13.8-30.7-30.7s13.8-30.7 30.7-30.7c16.9-.1 30.7 13.7 30.7 30.7z" fill="#fff"/></svg>
              <svg enableBackground="new 0 0 1024 1024" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle style={{cursor:"pointer"}} cx="512" cy="512" fill="#3c5a99" r="512"/><path style={{cursor:"pointer"}} d="m551.8 768v-233.2h78.6l11.8-91.3h-90.4v-58.1c0-26.4 7.3-44.3 45.1-44.3h47.9v-81.4c-8.3-1.1-36.9-3.6-70.2-3.6-69.5 0-117.1 42.4-117.1 120.3v67.2h-78.3v91.3h78.3v233.1z" fill="#fff"/></svg>
            </div>
          </div> */}
        </div>
        <div className="Footer-bottom">
          <p>Ⓒ Cito Disco @ 2022</p><p>|</p>
          <p>Cito Disco LLC</p><p>|</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
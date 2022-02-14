import styled from "styled-components";
export const Navbar = () => {
  const Wrapper = styled.div`
    height: 70px;
    width: 60%;
    margin: auto;
    border: 1px solid black;
    position:relative;
    padding:20px;
  `;

  const Logo = styled.img`
    height:50px;
    padding:10px;
    position:absolute;
    @media (max-width: 425px) {
      display:none;
  }
  
  `;

  const Linkdiv = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:right;
  padding:15px;
  gap:3rem;
  width:100%
  `;
  const Link = styled.a`
    padding:5px;
    font-size:25px;
    background:black;
    color:white;
    text-decoration:none;
  `;

  ;
  return (
    <div>
      <Wrapper>
        <Logo src="https://www.seekpng.com/png/detail/137-1374367_indian-army-magaindian-navy-logo-png-salute-for.png"/>
        <Linkdiv>
        <Link href="https://indianarmy.nic.in/" target="_blank"> Indian Army</Link>
        <Link href="https://www.joinindiannavy.gov.in/" target="_blank">Join Indian Army</Link>
        </Linkdiv>
      </Wrapper>
    </div>
  );
};

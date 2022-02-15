import "./menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {
  return <div className={"menu " +(menuOpen && "active")}>
   <ul>
       <li onClick={()=>setMenuOpen(false)}>
           <a href="#intro">Home</a>
       </li>
       <li onClick={()=>setMenuOpen(false)}>
           <a href="#portfolio">Resume</a>
       </li>
       <li onClick={()=>setMenuOpen(false)}>
           <a href="#Skills">Skills</a>
       </li>
       <li onClick={()=>setMenuOpen(false)}>
           <a href="#motivation">Motivation</a>
       </li>
       <li onClick={()=>setMenuOpen(false)}>
           <a href="#contact">Contact</a>
       </li>
   </ul>
  </div>;
}


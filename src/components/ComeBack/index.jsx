import { useNavigate } from "react-router-dom"

export default function ComeBack() {
  const navigate = useNavigate();
  function goBack(){
    navigate(-1)
  }
  return (
    <i
    className="bi bi-arrow-left-circle fs-1"
    onClick={goBack}
    style={{
      position: 'absolute',
      top: 30,
      left: 30,
      cursor: 'pointer',
      color: '#fff',
      zIndex: 3
    }}
    ></i>
  )
}

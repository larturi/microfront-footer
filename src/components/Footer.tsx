interface IFooter {
  bgColor?: string
  color?: string
}

const Footer = ({ bgColor = '#000', color = '#fff' }: IFooter) => {
  return (
    <>
      <div className='footer'>
        <div className='section'>
          <p>Footer</p>
        </div>
      </div>
      <style jsx>{`
        .footer {
          display: flex;
          align-items: center;
          width: 100%;
          padding: 1rem;
          position: fixed;
          bottom: 0;
          z-index: 5;
          height: 50px;
          background-color: ${bgColor};
          color: ${color};
        }

        .section {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }
      `}</style>
    </>
  )
}

export default Footer

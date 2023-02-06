import React, { Dispatch, SetStateAction } from 'react'
interface IFooter {
  setCount?: Dispatch<SetStateAction<number>>
  count?: number
  bgColor?: string
  color?: string
}

const Footer = ({ bgColor = '#000', color = '#fff', setCount, count = 0 }: IFooter) => {
  const handleClickButton = () => {
    if (typeof setCount === 'function') {
      setCount((prevState) => prevState + 1)
    }
  }

  return (
    <>
      <div className='footer'>
        <div className='section'>
          <p>2023</p>
          <p>Remote Footer</p>
          <p>
            <button onClick={handleClickButton}>Incrementar contador</button>
          </p>
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
          justify-content: space-between;
          width: 100%;
        }

        button {
          background-color: #000;
          border: 1px solid;
          border-color: #000;
          color: #fff;
          border-radius: 4px;
          padding: 10px 15px;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          cursor: pointer;
          transition: all 200ms ease-in-out;
          font-weight: 300;
          font-size: 1rem;
        }
      `}</style>
    </>
  )
}

export default Footer

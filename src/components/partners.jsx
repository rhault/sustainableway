export const Partners = (props) => {
  return (
    <div id='partners' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>{props.data ? props.data.title : 'Loading'}</h2>
          <p>{props.data ? props.data.paragraph : 'Loading'}</p>
        </div>
        {/* <div id='row'>
          {props.data
            ? props.data.partners.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-3 col-sm-6 team'>
                  <div className='thumbnail'>
                    {' '}
                    <img src={d.img} alt='...' className='team-img' />
                    <div className='caption'>
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div> */}
      </div>
    </div>
  )
}

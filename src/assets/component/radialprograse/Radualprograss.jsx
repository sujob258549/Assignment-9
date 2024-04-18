
import {  Heat } from '@alptugidin/react-circular-progress-bar'

const Radualprograss = () => {
    return (
      <div>
         <h1 data-aos="fade-top" className="text-3xl md:text-5xl  font-bold pb-5 md:pb-10 text-center">Our Servoses progress</h1>
          <div className='grid grid-cols-3 gap-5 md:gap-10'>
            <div>
                <h2 className='text-3xl font-bold text-center py-5'>Hotels servises</h2>
                <Heat
                    progress={70}
                    range={{ from: 0, to: 100 }}
                    sign={{ value: '%', position: 'end' }}
                    showValue={true}
                    revertBackground={false}
                    text={'Match'}
                    sx={{
                        barWidth: 7,
                        bgColor: '#dadadc',
                        shape: 'half',
                        valueSize: 13,
                        textSize: 13,
                        valueFamily: 'Trebuchet MS',
                        textFamily: 'Trebuchet MS',
                        valueWeight: 'bold',
                        textWeight: 'bold',
                        textColor: '#000000',
                        valueColor: '#000000',
                        loadingTime: 2000,
                        strokeLinecap: 'round',
                        valueAnimation: true,
                        intersectionEnabled: false
                    }}
                />
            </div>
            <div>
            <h2 className='text-3xl font-bold text-center py-5'>Lodges servise
            </h2>
                <Heat

                    progress={50}
                    range={{ from: 0, to: 100 }}
                    sign={{ value: '%', position: 'end' }}
                    showValue={true}
                    revertBackground={false}
                    text={'Match'}
                    sx={{
                        barWidth: 7,
                        bgColor: '#dadadc',
                        shape: 'half',
                        valueSize: 13,
                        textSize: 13,
                        valueFamily: 'Trebuchet MS',
                        textFamily: 'Trebuchet MS',
                        valueWeight: 'bold',
                        textWeight: 'bold',
                        textColor: '#000000',
                        valueColor: '#000000',
                        loadingTime: 2000,
                        strokeLinecap: 'round',
                        valueAnimation: true,
                        intersectionEnabled: false
                    }}
                />
            </div>
            <div>
            <h2 className='text-3xl font-bold text-center py-5'>Resorts servise
            </h2>
                <Heat
                    progress={80}
                    range={{ from: 0, to: 100 }}
                    sign={{ value: '%', position: 'end' }}
                    showValue={true}
                    revertBackground={false}
                    text={'Match'}
                    sx={{
                        barWidth: 7,
                        bgColor: '#dadadc',
                        shape: 'half',
                        valueSize: 13,
                        textSize: 13,
                        valueFamily: 'Trebuchet MS',
                        textFamily: 'Trebuchet MS',
                        valueWeight: 'bold',
                        textWeight: 'bold',
                        textColor: '#000000',
                        valueColor: '#000000',
                        loadingTime: 2000,
                        strokeLinecap: 'round',
                        valueAnimation: true,
                        intersectionEnabled: false
                    }}
                />
            </div>
        </div>
      </div>
    );
};

export default Radualprograss;
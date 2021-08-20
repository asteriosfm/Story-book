import TextInput from "../components/TextInput"
import Select from "../components/Select"
import PageTitle from "../components/PageTitle"
import PageSubitle from "../components/PageSubtitle"
import SmartButton from "../components/SmartButton"

const Home = () => {

  return (<>
    <div className="w-96">
      <PageTitle className='pageTitle' title='Create new event'/>
      <PageSubitle className='pageSubtitle' title='Add some basic information to create the event page'/>
      <TextInput
        label='Enter your name'
        placeHolder='Name'
        className='textInput'
      />
      <Select
        className='selectControl'
        title='Select event'
        valuesArray={['event1', 'event2']}
        placeholder='event'
      />
      <Select
        className='selectControl'
        title='Select location'
        valuesArray={['location1', 'location2']}
        placeholder='location'
      />
      <TextInput
        label='Enter your email'
        placeHolder='Email'
        className='textInput'
      />
      <TextInput
        label='Enter your city'
        placeHolder='City'
        className='textInput'
      />
      <TextInput
        label='Enter your name'
        placeHolder='Name'
        className='textInput'
      />
      <Select
        className='selectControl'
        title='Select location'
        valuesArray={['location1', 'location2']}
        placeholder='location'
      />
      <div style={{display: 'flex', flexDirection: 'row', width: '100%', marginTop: '47px'}}>
        <SmartButton className='blackButton' title='Create event'/>
        <SmartButton className='whiteButton' title='Cancel'/>
      </div>
    </div>
  </>)
}

export default Home

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './LeaveApplicationFormScreen.css';
import Dropdown from '../components/Dropdown';

const leaveTypeOptions = [
  { value: 'Choose Leave Type', label: 'Choose Leave Type' },
  { value: 'Parent Leave', label: 'Parent Leave' },
  { value: 'Official Leave', label: 'Official Leave' },
  { value: 'Summer Vacation', label: 'Summer Vacation' },
  { value: 'Winter Vacation', label: 'Winter Vacation' },
  { value: 'Emergency Leave', label: 'Emergency Leave' },
  { value: 'Local Guardian', label: 'Local Guardian' },
  { value: 'Outing', label: 'Outing' },
];

const LeaveApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    startDate: new Date(),
    endDate: new Date(),
    reason: '',
    address: '',
    startTime: new Date(),
    endTime: new Date(),
    leaveType: '',
  });

  const handleDateChange = (name, date) => {
    setFormData({ ...formData, [name]: date });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to a server)
    console.log('Leave application submitted:', formData);
  };

  return (
    <div className="leave-application-form">
      <h2>Leave Application Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="custom-dropdown">
          <Dropdown
            options={leaveTypeOptions}
            value={formData.leaveType}
            onChange={(e) => handleChange({ target: { name: 'leaveType', value: e.target.value } })}
          />
        </div>
        <div className="date-time-form-input">
          {/* Date Inputs */}
          <div className="form-group">
            <label htmlFor="startDate">Start Date:</label>
            <DatePicker
              selected={formData.startDate}
              onChange={(date) => handleDateChange('startDate', date)}
              dateFormat="MMMM d, yyyy"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="endDate">End Date:</label>
            <DatePicker
              selected={formData.endDate}
              onChange={(date) => handleDateChange('endDate', date)}
              dateFormat="MMMM d, yyyy"
              required
            />
          </div>

          {/* Time Inputs */}
          <div className="form-group">
            <label htmlFor="startTime">Start Time:</label>
            <DatePicker
              selected={formData.startTime}
              onChange={(date) => handleDateChange('startTime', date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="endTime">End Time:</label>
            <DatePicker
              selected={formData.endTime}
              onChange={(date) => handleDateChange('endTime', date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
              required
            />
          </div>
        </div>

        {/* Other Inputs */}
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="reason">Reason:</label>
          <textarea
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <center>
          <button type="submit">Submit Leave Application</button>
        </center>
      </form>
    </div>
  );
};

function LeaveApplicationFormScreen() {
  return (
    <div className="App">
      <LeaveApplicationForm />
    </div>
  );
}

export default LeaveApplicationFormScreen;
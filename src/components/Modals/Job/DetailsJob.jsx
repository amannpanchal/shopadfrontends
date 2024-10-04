import React from 'react'

const DetailsJob = ({ editingRecord }) => {
  return (
    <div>
      <h2>Job Title: {editingRecord?.title || ' '}</h2>
      <p><strong>Description:</strong> {editingRecord?.description || ''}</p>
      <p><strong>Location:</strong> {editingRecord?.location || ''}</p>
      <p><strong>Shop Name:</strong> {editingRecord?.shopName || ''}</p>
      <p><strong>Designation:</strong> {editingRecord?.designationName || ''}</p>

      <h3>Job Details:</h3>
      <p><strong>Status:</strong> {editingRecord?.status || ''}</p>
      <p><strong>Gender:</strong> {editingRecord?.gender || ''}</p>
      <p><strong>Area of Work:</strong> {editingRecord?.areaWork || ' '}</p>
      <p><strong>Number of Work:</strong> {editingRecord?.numberWork || ''}</p>
      <p><strong>Experience Required:</strong> {editingRecord?.experienceRequired || ''}</p>
      <p><strong>Manpower Needed:</strong> {editingRecord?.manpowerNumber || ''}</p>
      <p><strong>Work Timing:</strong> {editingRecord?.workTiming || ''}</p>

      <h3>Facilities Offered:</h3>
      <p><strong>Incentive:</strong> ₹{editingRecord?.incentiveOffered || ''}</p>

      <p><strong>Vehicle Required:</strong> {editingRecord?.vechileRequired}</p>
      <p><strong>Interview Timing:</strong> {editingRecord?.interviewTiming || 'Not specified'}</p>
      <p><strong>Message:</strong> {editingRecord?.message || ''}</p>

      <h3>Documents Required:</h3>
      <p><strong>CV:</strong> {editingRecord?.isCv ? 'Yes' : 'No'}</p>
      <p><strong>Certificate:</strong> {editingRecord?.isCertificate ? 'Yes' : 'No'}</p>
      <p><strong>Police Clearance:</strong> {editingRecord?.isPolice ? 'Yes' : 'No'}</p>

      <h3>Salary & Contact:</h3>
      <p><strong>Salary Range:</strong> ₹{editingRecord?.salary || ''}</p>
      <p><strong>Contact Number:</strong> {editingRecord?.contactNumber || ''}</p>
      <p><strong>Contact Email:</strong> {editingRecord?.contactEmail || ''}</p>

      <h3>Important Dates:</h3>
      <p><strong>Start Date:</strong> {new Date(editingRecord?.startDate).toLocaleDateString() || ''}</p>
      <p><strong>End Date:</strong> {new Date(editingRecord?.endDate).toLocaleDateString() || ''}</p>
    </div>
  )
}

export default DetailsJob

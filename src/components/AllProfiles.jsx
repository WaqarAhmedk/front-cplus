import React from 'react'
import '../App.css'
export default function AllProfiles({ profileData }) {
    return (
        <div>

            <table className="profile-table">
                <thead>
                    <tr>
                        <th>Profile Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {profileData.map((profile, index) => (
                        <tr key={index}>
                            <td>{profile.profile_image}</td>
                            <td>{profile.name}</td>
                            <td>{profile.email}</td>
                            <td>{profile.password}</td>
                            <td>
                                <span>edit</span>
                                <span>view</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

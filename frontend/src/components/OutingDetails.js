import { useOutingsContext } from '../hooks/useOutingsContext'
import { useAuthContext } from '../hooks/useAuthContext'

const OutingDetails = ({ outing }) => {

    const { dispatch } = useOutingsContext()
    const { user } = useAuthContext()

    const handleClick = async () => {

        if (!user) {
            return
        }

        const response = await fetch('api/outings/' + outing._id, {
            method: 'DELETE',
            headers : {
                'Authorization': `Bearer ${user.token}`
            }
        }) 

        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_OUTING', payload: json})
        }
    }

    const approveOuting = async () => {

        if (!user) {
            return 
        }

        const response = await fetch('api/outings/' + outing._id, {
            method: 'PATCH',
            headers : {
                'Authorization': `Bearer ${user.token}`
            }
        }) 

        var json = await response.json()

        json.approvalStatus = "Approved";

        if (response.ok) {
            dispatch({type: 'PATCH_OUTING', payload: json})
        }
    }

    return(
        <div className="outing-details">
            <p><strong>Leave Type: </strong>{outing.leaveType}</p>
            <p><strong>Visiting Place: </strong>{outing.visitingPlace}</p>
            <p><strong>Reason: </strong>{outing.reason}</p>
            <p><strong>From Date: </strong>{outing.fromDate}</p>
            <p><strong>From Time: </strong>{outing.fromTime}</p>
            <p><strong>To Date: </strong>{outing.toDate}</p>
            <p><strong>To Time: </strong>{outing.toTime}</p>
            <p><strong>Status: </strong>{outing.approvalStatus}</p>
            <button onClick={handleClick}>Delete</button>
            <button onClick={approveOuting}>Approve</button>
        </div>
    )
}

export default OutingDetails
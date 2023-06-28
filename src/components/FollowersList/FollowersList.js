import React, { useEffect, useState } from 'react'
import "./FollowersList.css"
import axios from "axios"
import { Link } from 'react-router-dom';

export default function FollowersList() {

    const [followers, setFollowers] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();
        fetchFollowers(abortController.signal);
        return () => {
            abortController.abort();
        };
    }, []);

    const fetchFollowers = async (signal) => {
        try {
            const {data} = await axios.get("https://randomuser.me/api/?results=5", { signal });
            setFollowers(data.results);
        } catch (error) {
            if (error.name === 'AbortError') {
                console.log('Fetch aborted');
            } else {
                throw error;
            }
        }
    }

    return (
        <div className="followerslist-container" data-testid={"followerlist-container"}>
            <div>
                {followers.map((follower, index) => (
                    <div className="follower-item" key={index} data-testid={`follower-item-${index}`}>
                        <img src={follower.picture.large}/>
                        <div className="followers-details">
                            <div className="follower-item-name">
                                <h4>{follower.name.first}</h4> <h4>{follower.name.last}</h4>
                            </div>
                            <p>{follower.login.username}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="todo-footer">
                <Link to="/">Go Back</Link>
            </div>
        </div>
    )
}

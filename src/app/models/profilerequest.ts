export class ProfileRequest{

    profile_type:string;
    user_name:string;

    setProfileType(profile_type:string)
    {
        this.profile_type=profile_type;
    }

    getProfileType()
    {
        return this.profile_type;
    }

    setUserName(user_name:string)
    {
        this.user_name=user_name;
    }

    getUserName()
    {
        return this.user_name;
    }
}
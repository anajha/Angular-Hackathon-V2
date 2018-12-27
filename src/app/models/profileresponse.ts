export class ProfileResponse{

    profile_type:string[];

    setProfileType(profile_type:string[])
    {
        this.profile_type=profile_type;
    }

    getProfileType()
    {
        return this.profile_type;
    }
}
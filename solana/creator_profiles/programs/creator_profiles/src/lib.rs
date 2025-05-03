use anchor_lang::prelude::*;

declare_id!("ARW4XbNz2VWLJPBiTyrUAcuLo5dDNvQpd2y9MATSKtJ3");

#[program]
pub mod creator_profiles {
    use super::*;

    pub fn create_profile(
        ctx: Context<CreateProfile>,
        username: String,
        name: String,
        tags: Vec<String>,
    ) -> Result<()> {
        let profile = &mut ctx.accounts.profile;

        if username.len() > 50 {
            return Err(ErrorCode::UsernameTooLong.into());
        }

        profile.authority = *ctx.accounts.authority.key;
        profile.username = username;
        profile.name = name;
        profile.bio = bio;
        profile.tags = tags;
        profile.level = 1; 
        profile.xp = 0;    
        profile.post_count = 0;
        
        msg!("Profile created for: {}", profile.authority);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct CreateProfile<'info> {
    #[account(
        init,              
        payer = authority, 
        space = 8 +       
            32 +          
            50 +          
            50 +          
            500 +         
            100 +         
            1 +          
            8 +           
            1 +          
            100,          
        seeds = [b"profile", authority.key().as_ref()],
        bump
    )]

    pub profile: Account<'info, Profile>,
    
    #[account(mut)]
    pub authority: Signer<info>,

    pub system_program: Program<info, System>
}

#[account]
pub struct Profile {
    pub authority: Pubkey,   
    pub username: String,     
    pub name: String,        
    pub bio: String,         
    pub tags: Vec<String>,   
    pub level: u8,          
    pub xp: u64,          
    pub post_count: u8,    
    pub socials: Socials,
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone)]
pub struct Socials {
    pub website: Option<String>,
    pub twitter: Option<String>,
    pub instagram: Option<String>,
}

#[error_code]
pub enum ErrorCode {
    #[msg("Username must be 50 characters or less")]
    UsernameTooLong,
}
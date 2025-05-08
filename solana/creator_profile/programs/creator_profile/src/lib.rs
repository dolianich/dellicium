use anchor_lang::prelude::*;

declare_id!("Gsi418KmVRZbvMuQhiFcppNokJWCWAhdX6VvkGY8NCZP");

#[program]
pub mod creator_profile {
    use super::*;

    pub fn create_profile(
        ctx: Context<CreateProfile>,
        username: String, 
        name: String, bio: String, 
        tags: Vec<String>) -> Result<()>{
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

        msg!("Profile created for {}", profile.authority);
        Ok(())
    }
}

#[account]
pub struct Profile{
    pub authority: Pubkey,
    pub username: String,
    pub name: String,
    pub bio: String,
    pub tags: Vec<String>,
    pub level: u8,
    pub xp: u64,
    pub post_count: u8,
}

#[derive(Accounts)]
pub struct CreateProfile<'info>{
    #[account(
        init,
        payer = authority,
        space = 8 + 32 + 50 + 50 + 500 + 100 + 1 + 8 + 1,
        seeds = [b"profile", authority.key().as_ref()], 
        bump
    )]
    pub profile: Account<'info, Profile>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>
}

#[error_code]
pub enum ErrorCode{
    #[msg("Username must be 50 characters or less")]
    UsernameTooLong,
}
use anchor_lang::prelude::*;

declare_id!("Gsi418KmVRZbvMuQhiFcppNokJWCWAhdX6VvkGY8NCZP");

#[program]
pub mod creator_profile {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}

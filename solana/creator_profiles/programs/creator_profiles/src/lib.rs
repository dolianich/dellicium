use anchor_lang::prelude::*;

declare_id!("ARW4XbNz2VWLJPBiTyrUAcuLo5dDNvQpd2y9MATSKtJ3");

#[program]
pub mod creator_profiles {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
